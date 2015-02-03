from rest_framework.decorators import api_view, renderer_classes
from rest_framework.renderers import JSONRenderer, JSONPRenderer
from rest_framework.response import Response
import urllib2
import json

# Create your views here.
@api_view(['GET', 'POST'])
@renderer_classes((JSONRenderer, JSONPRenderer))
def loan(request):
	dataurl = "https://spreadsheets.google.com/feeds/list/1EIpq8PWRcQHaQ4D7KO9cU1WE98JldD-u9yHb7NYiqJg/od6/public/values?alt=json"
	if request.method == 'GET':
                principals = [0]  * 20
        error = ""
        max = 0
        try :
            #Principal, term, Repayments left
            response = urllib2.urlopen(dataurl)
            html = response.read()
            data = json.loads(html)
            entry = data['feed']['entry']
            for item in data['feed']['entry']:
                principal = float(item['gsx$principal']['$t'])
                term = item['gsx$term']['$t']
                repayments = item['gsx$repaymentsleft']['$t']
                age = round((float(repayments) * 100) / float(term), 2)
                pos = int(age  / 5)
                if max < principal:
                    max = principal
                if age > float(pos * 5):
                    pos += 1;
                if pos == 20:
                    pos = 19
                if principals[pos] < principal:
                    principals[pos] = principal
        except:
            error = "failed"

        res = {};
        res["status"] = "success"
        if error != "":
            res["status"] = "faild"

        res['data'] = principals
        res['max'] = max
      #  content = {data : principals}
    	return Response(res)
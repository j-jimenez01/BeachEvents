from rest_framework import response 
from rest_framework.decorators import api_view
from django.shortcuts import HttpResponse
from .processing import processTime, processingEventData
import requests

# Search by IDs 
# @api_view(['GET'])
# def getEvents(request):
#     print("pappu:", request.GET.get('query'))
#     if request.GET.get('query') != None:
#         print(processTime())
#         res = (requests.get(f"https://csulb.campuslabs.com/engage/api/discovery/event/search?endsAfter={processTime()}&status=Approved&take=10000000&query={request.GET.get('query')}")).json()['value']
#     else:
#          res = (requests.get(f"https://csulb.campuslabs.com/engage/api/discovery/event/search?endsAfter={processTime()}&status=Approved&take=10000000")).json()['value']

#     val  = [ {'name': i['name'], "Id" : i['id'], 'description': i['description'], 'location': i['location'],'start' : i['startsOn'], 'end': i['endsOn']} for i in res]
#     return response.Response(val)

@api_view(['GET'])
def getEvents(request):

    def date(date):
        final_date = ""
        if(int(date[:2]) >= 13):
            for i in range(13,25):
                if(i == int(date[:2])):
                    final_date = i-12
                    date = str(final_date) + " : " + date[3:] + " pm"
                    return date
        else:
            return  date + " am"
        
    def month(month):
        if(month[5:7] == "01"):
            return f"January {month[8:10]} {month[0:4]}"
        if(month[5:7] == "02"):
            return f"February {month[8:10]} {month[0:4]}"
        if(month[5:7] == "03"):
            return f"March {month[8:10]} {month[0:4]}"
        if(month[5:7] == "04"):
            return f"April {month[8:10]} {month[0:4]}"
        if(month[5:7] == "05"):
            return f"May {month[8:10]} {month[0:4]}"
        if(month[5:7] == "06"):
            return f"June {month[8:10]} {month[0:4]}"
        if(month[5:7] == "07"):
            return f"July {month[8:10]} {month[0:4]}"
        if(month[5:7] == "08"):
            return f"August {month[8:10]} {month[0:4]}"
        if(month[5:7] == "09"):
            return f"September {month[8:10]} {month[0:4]}"
        if(month[5:7] == "10"):
            return f"October {month[8:10]} {month[0:4]}"
        if(month[5:7] == "11"):
            return f"November {month[8:10]} {month[0:4]}"
        if(month[5:7] == "12"):
            return f"December {month[8:10]} {month[0:4]}"
                        #https://csulb.campuslabs.com/engage/api/discovery/event/search?endsAfter=2023-10-11T17%5E%25%5E3A39%5E%25%5E3A12-07%5E%25%5E3A00&status=Approved&take=15&query=farm
    res = (requests.get(f"https://csulb.campuslabs.com/engage/api/discovery/event/search?endsAfter={processTime()}&status=Approved&take=100000&query={request.GET.get('query')}")).json()['value']
    val  = [ { 'pinned': False,'name': i['name'], "key" : i['id'], 'description': processingEventData(i['description']) , 'location': i['location'],'start' : f"{date(i['startsOn'][11:16])} on {month(i['startsOn'][:10])}", 'end': f"{date(i['endsOn'][11:16])} on {month(i['endsOn'][:10])}", 'imagePath': f'https://se-images.campuslabs.com/clink/images/{i["imagePath"]}?preset=large-w&quot'} for i in res]
    return response.Response(val)

# get orgs list by username form front end and for every orgID do getORGcall from the beach sync database
@api_view(['GET'])
def getOrgs(request):
    res = requests.get(f"https://csulb.campuslabs.com/engage/api/discovery/search/organizations?orderBy%5B0%5D=UpperName%20asc&top=10&filter&query={request.GET.get('query')}&skip=0").json()['value']
    # return response.Response(res.json()['value'])
    val  = [ {'name': i['Name'], 'Summary': i['Summary'], 'ProfilePicture': f"https://se-images.campuslabs.com/clink/images/{i['ProfilePicture']}?preset=small-sq"} for i in res]
    
    return response.Response(val)

# image query https://se-images.campuslabs.com/clink/images/__profilepicture__?preset=small-sq
@api_view(['GET'])
def getOrgEvents(request):
    pass



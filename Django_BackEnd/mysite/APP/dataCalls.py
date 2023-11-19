from rest_framework import response 
from rest_framework.decorators import api_view
from django.shortcuts import HttpResponse
from .processing import processTime, processingEventData
import requests

# Search by IDs 
# @api_view(['GET'])
# def getEvents(request):
#     print(request.GET.get('query'))
#     if request.GET.get('query') != None:
#         print(processTime())
#         res = (requests.get(f"https://csulb.campuslabs.com/engage/api/discovery/event/search?endsAfter={processTime()}&status=Approved&take=10000000&query={request.GET.get('query')}")).json()['value']
#     else:
#          res = (requests.get(f"https://csulb.campuslabs.com/engage/api/discovery/event/search?endsAfter={processTime()}&status=Approved&take=10000000")).json()['value']

#     val  = [ {'name': i['name'], "Id" : i['id'], 'description': i['description'], 'location': i['location'],'start' : i['startsOn'], 'end': i['endsOn']} for i in res]
#     return response.Response(val)

@api_view(['GET'])
def getEvents(request):


                        #https://csulb.campuslabs.com/engage/api/discovery/event/search?endsAfter=2023-10-11T17%5E%25%5E3A39%5E%25%5E3A12-07%5E%25%5E3A00&status=Approved&take=15&query=farm
    res = (requests.get(f"https://csulb.campuslabs.com/engage/api/discovery/event/search?endsAfter={processTime()}&status=Approved&take=10&query={request.GET.get('query')}")).json()['value']
    val  = [ {'name': i['name'], "Id" : i['id'], 'description': processingEventData(i['description']) , 'location': i['location'],'start' : i['startsOn'], 'end': i['endsOn'], 'imagePath': f'https://se-images.campuslabs.com/clink/images/{i["imagePath"]}?preset=large-w&quot'} for i in res]
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


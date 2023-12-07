import time
import re
from datetime import datetime
from pytz import timezone

datetime_NewYork = datetime.now(timezone('America/Los_Angeles'))
print("LA time:", datetime_NewYork.strftime("%H:%M:%S"))


# def processTime():
#     s = time.asctime()
#     return s

def processTime():
    def date(keyword):
     return getattr(time.localtime(), keyword, None)
 
    t = "year-month-dayThour%3Aminute%3Asecond-08%3A00"
    b = ['year','month','day','hour','minute','second']
    for i in range(len(b)):
        d = str(date(str(time.localtime().__match_args__[i])))
        t = t.replace(b[i],"0" + d if len(d) < 2 else d)
        
    return t

def processingEventData(text):

    if text is not None:
        if("&nbsp" in text):
            text = text.replace("&nbsp","")
            text = text.replace(";","")
            remove = re.compile('<.*?>')

            text = re.sub(remove, '', text)
    
        return text
    else:
        return ""
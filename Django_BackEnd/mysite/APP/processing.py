import time
import re

from datetime import datetime
from pytz import timezone 

datetime_NewYork = datetime.now(timezone('America/Los_Angeles'))
print("LA time:", datetime_NewYork.strftime("%H:%M:%S"))


def processTime():
    # sl = ""
    # lt = time.localtime()[:6]
    # print(lt)
    # offset = abs(time.localtime().tm_gmtoff) / 3600
    # print(offset)
    # if time.localtime().tm_gmtoff < 0: 
    #     sl = '-'
    # else:
    #     sl = '+'
    # offsetHr, offsetMin =  f"{int(offset):02}", f"{int(offset % int(offset))*60:02}"
    # s = str(lt[0]) + '-' + str(f"{lt[1]:02}")+ '-' + str(f"{lt[2]:02}") +'T' +  str(f"{lt[3]:02}") + "%3A" + str(f"{lt[4]:02}") + "%3A" + str(lt[5]) + sl + offsetHr + "%3A" + offsetMin
    # print(s)
    
    # date = string[:10]
    
    s = time.asctime()
    return s

def processingEventData(text):
    remove = re.compile('<.*?>')
    text = re.sub(remove, '', text)
    return text



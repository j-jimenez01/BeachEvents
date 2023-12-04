import time
import re
from datetime import datetime
from pytz import timezone

datetime_NewYork = datetime.now(timezone('America/Los_Angeles'))
print("LA time:", datetime_NewYork.strftime("%H:%M:%S"))


def processTime():
    s = time.asctime()
    return s

def processingEventData(text):
    remove = re.compile('<.*?>')
    text = re.sub(remove, '', text)
    return text



from urllib.parse import quote
import time

# # print(time.localtime())
# # Create your tests here.
# s = "2023-12-07T01%3A29%3A18-08%3A00"
# t = "year-month-dayThour%3Aminute%3Asecond-08%3A00"

# a = time.localtime()
# # t = t.replace("year",a.__match_args__)
# c = list(a.__match_args__)

# # print(a[time.localtime().__match_args__[0]])
# print(a)

# def date(keyword):
#      return getattr(time.localtime(), keyword, None)

# b = ['year','month','day','hour','minute','second']
# c = ['tm_year','tm_mon','tm_mday','tm_hour','tm_min','tm_sec']
# for i in range(len(b)):
#     d = str(date(str(time.localtime().__match_args__[i])))
#     t = t.replace(b[i],"0" + d if len(d) < 2 else d)
# # s = s.replace("T"," ")

def processTime():
    def date(keyword):
     return getattr(time.localtime(), keyword, None)
 
    t = "year-month-dayThour%3Aminute%3Asecond-08%3A00"
    b = ['year','month','day','hour','minute','second']
    for i in range(len(b)):
        d = str(date(str(time.localtime().__match_args__[i])))
        t = t.replace(b[i],"0" + d if len(d) < 2 else d)
        
    return t
    


 
# print(date('tm_year'))

print(processTime())
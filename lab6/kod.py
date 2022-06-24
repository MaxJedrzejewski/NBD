#!/usr/bin/env python
# coding: utf-8

# In[1]:


import riak
#Połączenie z bazą
myClient = riak.RiakClient(pb_port=8087)
myBucket = myClient.bucket("s24209")
#Wrzucenie dokumentu
values = {"var1": 1, "var2": "raz"}
myBucket.new("cw6", data=values).store()
#Pobranie
fetched = myBucket.get("cw6")
#Wypisanie
print(fetched.data)
#Modyfikacja
fetched.data["var1"] = 4
fetched.store()
#Pobranie
fetched = myBucket("cw6")
#Wypisanie
print(fetched.data)
#Usunięcie dokumentu
fetched.delete()
#Pobranie po usunięciu
fetched = myBucket("cw6")
print(fetched.data)


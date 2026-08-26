import eel

eel.init("web")

@eel.expose
def hitung_volume(panjang, lebar, tinggi):
    return panjang * lebar * tinggi

eel.start("index.html")
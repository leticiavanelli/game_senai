class Obj{
    constructor(x,y,w,h,a){
        this.x = x
        this.y = y
        this.w = w
        this.h = h
        this.a = a
    }
}
class Carro extends Obj{
    dir = 0
    pts = 0
    vida = 5
}
class A{
    int i;    //Non-static or Instance Variable 
    public static void main(String[] args){
        A a1 = new A();
        System.out.println(a1.i);
        a1.i=20;
        System.out.println(a1.i);
    }
}
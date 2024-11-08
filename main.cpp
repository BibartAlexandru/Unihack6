#include <iostream>
#include <fstream>
#define NR_TEST_CASES 10
using namespace std ;

ifstream in ;
ofstream out ;

int add_nums(int,int) ;

void call_func(ifstream& in, ofstream& out){
    int x,y ;
    in >> x >> y ;
    int res = add_nums(x,y) ;
    out << res ;
}

int main(){
    for(int t = 0 ; t < NR_TEST_CASES ; t++){
        in.open("input" + to_string(t) + ".txt") ;
        out.open("output" + to_string(t) + ".txt") ;

        call_func(in,out) ;

        in.close() ;
        out.close() ;
    }
    return 0 ;
}

//g++ ./main.cpp ./user.cpp
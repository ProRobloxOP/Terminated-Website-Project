#include <iostream>

using namespace std;

int main(){
    int x = 0;
    int statements;
    cin >> statements;

    for (int i = 0; i <statements; i++){
        string input;
        cin >> input;

        if (input.find("++") <= input.length()){
            x++;
        } else if (input.find("--") <= input.length()){
            x--;
        }
    }

    cout << x;
}

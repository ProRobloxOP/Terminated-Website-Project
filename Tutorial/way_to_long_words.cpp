#include <iostream>
#include <string>

using namespace std;

int main(){
    int t;
    cin >> t;

    for (int i = 0; i <= t; i++){
        string word;
        cin >> word;
        cout << "\n";

        int length = word.length();

        if (length > 10){
            word = word[0]+std::to_string(length-2)+word[length-1];
        }

        cout << word << "\n";
    }
}

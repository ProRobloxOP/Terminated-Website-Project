#include <iostream>

using namespace std;

int main(){
    int coins = 0;
    int n;

    cin >> n;

    for (int i = 0; i < n; i++){
        int x;
        cin >> x;

        coins += x & 1;
    }

    cout << min(coins, n - coins) << endl;
}

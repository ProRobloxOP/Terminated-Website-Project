#include <iostream>
#include <cmath>
#include <map>

using namespace std;

int main(){
    int n;
    cin >> n;

    for (int i = 0; i < n; i++){
        int t = 0;
        int c;
        cin >> c;

        int matrix_i = 1;
        int matrix_j = 1;

        // Stores Base Difference For Each Diagonal
        map<int, int> smallest_diagonal_numbers = {};

        for (int _ = 0; _ < pow(c, 2); _++){
            int x;
            cin >> x;

            if (x < 0){
                // Base is starting position for diagonal
                int smallest_number = smallest_diagonal_numbers[matrix_i - matrix_j];
                
                if (smallest_diagonal_numbers.find(matrix_i - matrix_j) == smallest_diagonal_numbers.end() || x < smallest_number){
                    smallest_diagonal_numbers[matrix_i - matrix_j] = x;
                    t += smallest_number;
                    t -= x;
                }
            }

            if (matrix_i < c){
                matrix_i++;
            }else{
                matrix_j++;
                matrix_i = 1;
            }
        }

        cout << t << endl;
    }

    return 0;
}

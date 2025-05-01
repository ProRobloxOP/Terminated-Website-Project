#include <iostream>
#include <map>
#include <vector>

using namespace std;

int main()
{
    int cases;
    cin >> cases;

    for (int _ = 0; _ < cases; _++)
    {
        int num_Petals;
        int coins;
        
        map <string, int> max_petals = {};
        max_petals["num"] = 0;
        max_petals["index"] = 0;

        cin >> num_Petals;
        cin >> coins;

        map<int, int> petals = {};
        map <int, int> added_petals = {};

        for (int n = 0; n < num_Petals; n++)
        {
            int p;
            cin >> p;
            
            if (petals.find(p) == petals.end()){
                petals[p] = p;
            } else if (petals[p] + p < coins){
                petals[p] += p;
            }
        }

        for (auto petal: petals){
            if (petal.second > coins){continue;}

            int p = petal.first;
            int next_p;
            int past_p;

            if (petals.find(p + 1) != petals.end() && petals.find(p - 1) != petals.end()){
                next_p = petals[p+1];
                past_p = petals[p-1];

                if (next_p > past_p && next_p <= coins){
                    added_petals[p] = petal.second + next_p;
                } else if (past_p <= coins){
                    added_petals[p] = petal.second - past_p;
                }
            } else if (petals.find(p + 1) != petals.end() && petals[p+1] <= coins) {
                added_petals[p] = petal.second + petals[p + 1];
            } else if (petals.find(p - 1) != petals.end() && petals[p-1] <= coins) {
                added_petals[p] = petal.second + petals[p - 1];
            }

            if (added_petals.find(p) == added_petals.end()){
                added_petals[p] = petal.second;
            }
        }

        for (auto added_petal: added_petals){
            if (added_petal.second > max_petals["num"]) {
                max_petals["num"] = added_petal.second;
                max_petals["index"] = added_petal.first;
            }
        }

        cout << max_petals["index"] << endl;
        cout << max_petals["num"] << endl;

        if (max_petals["num"] > coins){
            int pPetal = petals[max_petals["index"]];
            
            if (pPetal <= coins){
                max_petals["num"] = pPetal;
            }else{
                max_petals["num"] = 0;
            }
        }

        cout << max_petals["num"] << endl;
    }

    return 0;
}

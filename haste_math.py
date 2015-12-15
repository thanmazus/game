import matplotlib.pyplot as plt
import math

def calculate_haste(valueDict):    

    passive_haste = valueDict['passive_haste']
    interval = valueDict['interval']
    
    
    if (passive_haste == 0.0):
        passive_haste = 0.1
    else:
        passive_haste *= 1.1

    #interval = 1000 * math.fabs(passive_haste - 1) 
    interval = interval * 0.9
    
    
    valueDict['passive_haste'] = passive_haste
    valueDict['interval'] = interval    


def main():
    values = dict(passive_haste = 0.0, interval = 1000)
    x_results = []
    y_results = []
    for x in range(0, 100):
        
        x_results.append(x)
        y_results.append(values['interval'])
        calculate_haste(values)
    
    plt.plot(x_results, y_results)
    plt.xlabel('Haste Level')
    plt.ylabel('Interval')
    plt.show()
                        
if __name__ == '__main__':
    main()
for v_cont in range(1, 1001):
    if v_cont % 3 == 0 and v_cont % 5 == 0:
        print("Fizzbuzz")
    elif v_cont % 3 == 0:
        print("Fizz")
    elif v_cont % 5 == 0:
        print("Buzz")
    else:
        print(v_cont)

if __name__ == '__main__':
    n = int(input())
    our_list = []
    for i in range(0, n):
        number = int(input())
        our_list.append(number)
    our_list.remove(max(our_list))
    print(max(our_list))









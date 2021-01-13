# Shell Scripts
## If
``` shell
if [ 조건식 ]; then
	# body
fi
```
조건식 사이에 공백을 안넣으면 동작하지 않음  
then 을 안써도 동작하지 않음  
  
``` shell
# if not
if ! [ 조건식 ]; then
	# body
fi
```
if not은 조건식 대괄호 앞에 공백 하나를 넣고 ! 추가  
  
## for
``` shell
for i in $(seq 1 5)
do
	# body
done
```
for _ in _ 형식으로 사용  
seq 명령어로 파이썬의 range()와 같은 효과를 낼 수 있음  
``` console
~ $ seq 1 5
1
2
3
4
5
```
위와 같이 콘솔에서도 이상없이 동작함  

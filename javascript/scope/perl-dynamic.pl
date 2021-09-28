# Perl 예제
$x = 'global';

sub f {
  print $x.'\n';
}

# dynamic scope
sub g {
  local $x = 'local'; # local 키워드로 동적 스코프를 따르는 private 변수 생성
  f();
}

# lexical scope
sub h {
  my $x = 'local'; # my 키워드로 렉시컬 스코프를 따르는 private 변수 생성
  f();
}

f(); # global
g(); # local
h(); # global

# 참고 - What is the difference between my and local in Perl?
# https://stackoverflow.com/questions/129607/what-is-the-difference-between-my-and-local-in-perl

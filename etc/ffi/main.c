#include <HsFFI.h>
#ifdef __GLASGOW_HASKELL__
#include "Add_stub.h"
#endif
#include <stdio.h>

int main(int argc, char *argv[])
{
    int i;
    hs_init(&argc, &argv);

    i = add(10, 5);
    printf("result: %d\n", i);

    hs_exit();
    return 0;
}

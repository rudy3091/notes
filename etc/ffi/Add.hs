{-# LANGUAGE ForeignFunctionInterface #-}

module Add where

import Foreign.C.Types

add :: CInt -> CInt -> CInt
add x y = x + y

foreign export ccall add :: CInt -> CInt -> CInt

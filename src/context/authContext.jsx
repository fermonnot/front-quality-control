import React, { useState, useContext } from 'react'
import { UserContex } from './userContext'

const useAuthContext = () => {
  const contex = useContext(UserContex)
  return (
    contex
  );
}

export default useAuthContext;
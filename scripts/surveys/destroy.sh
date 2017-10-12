#!/bin/bash
TOKEN="/gAKzErLHId3Hc8Qs2xoSLAkGWo+kxXfUEfADGjjQoE=--b46sZUFpIIY5TIsKUNhdHezKUSMuykmuQCL9u9jQ64w="

API="http://localhost:4741"
URL_PATH="/surveys"

curl "${API}${URL_PATH}/${ID}" \
  --include \
  --request DELETE \
  --header "Authorization: Token token=${TOKEN}"

echo

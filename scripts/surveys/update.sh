#!/bin/bash
TOKEN="/gAKzErLHId3Hc8Qs2xoSLAkGWo+kxXfUEfADGjjQoE=--b46sZUFpIIY5TIsKUNhdHezKUSMuykmuQCL9u9jQ64w="

API="http://localhost:4741"
URL_PATH="/surveys"

curl "${API}${URL_PATH}/${ID}" \
  --include \
  --request PATCH \
  --header "Content-Type: application/json" \
  --header "Authorization: Token token=${TOKEN}" \
  --data '{
    "survey": {
      "title": "'"${TITLE}"'",
      "questions": {
        "content": "'"${CONTENT}"'",
        "responses": {
          "answer1": "'"${ANS1}"'",
          "answer2": "'"${ANS2}"'"
          }
        }
    }
  }'

echo

#!/bin/bash

curl "https://tic-tac-toe-wdi.herokuapp.com/users/${ID}" \
  --include \
  --request GET \
  --header "Authorization: Token token=${TOKEN}"

echo

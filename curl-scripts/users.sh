#!/bin/bash

curl "https://tic-tac-toe-wdi.herokuapp.com/users" \
  --include \
  --request GET \
  --header "Authorization: Token token=${TOKEN}"

echo

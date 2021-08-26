#!/bin/bash

aws s3 mb s3://lambda-deploy-test-giyong --profile gidol --region ap-northeast-2

zip -rq dist-latest.zip src package.json zipinfo dist-latest.zip

aws s3 cp dist-latest.zip s3://lambda-deploy-test-giyong/dist-latest.zip --profile gidol --region ap-northeast-2

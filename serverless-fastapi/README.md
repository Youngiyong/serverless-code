## Overview

```
https://serverless.com/framework/docs/providers/aws/guide/installation/
```

## Architecture

```
Serverless + FastAPI + MySQL
```

## Functions

find
```
path : /find/{post_id}/{vote_id}
```

create
```
path : /create
```

update
```
path : /update/{post_id}/{vote_id}
```

delete
```
- path: /delete/{post_id}/{vote_id}
```

## Development

### invoke local
- sls invoke local -f find -p payload/find.json
- sls invoke local -f create -p payload/create.json
- sls invoke local -f update -p payload/update.json
- sls invoke local -f delete -p payload/delete.json

### deployment
- sls deploy

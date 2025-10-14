# Pancakes

The website for the Hack Club YSWS Pancakes!

## Development

First, clone the repository and navigate into it.

```bash
git clone https://github.com/thesleepyniko/pancakes-ysws-website
```

Next, copy the example env file.

```bash
cp .env.example .env
```
Inside, there will be an Airtable API key. In order to develop locally, you will need your own 
key, or you will need to comment out the airtable functionality.

Finally, before running, install dependencies.

```bash
python3 -m venv venv
source venv/bin/activate
pip install -r requirements.txt
```
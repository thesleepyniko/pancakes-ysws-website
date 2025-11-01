# Pancakes

The website for the Hack Club YSWS Pancakes!

## Development

First, clone the repository and navigate into it.

```bash
git clone https://github.com/thesleepyniko/pancakes-ysws-website
```
Next, before running, install dependencies.

```bash
python3 -m venv venv
source venv/bin/activate
pip install -r requirements.txt
```

Finally, you'll want to use the following command to run it in development mode.

```bash
fastapi dev main.py
```

Otherwise, if you are instead intending on running your own instance (though I don't really see a need for it...), run the following command:

```bash
fastapi run main.py
```

You should be good to go! PRs are very appreciated!

## For the Athena reviewers...

### What's this project?

It's the website for my YSWS, Pancakes! It just shows some info, there was more JS planned but fillout as it turns out is pretty cool

### Why did I make this?

It's a website for my YSWS! I needed this, but also this was a super good experience to get deeper into just raw HTMl, CSS, and JS for me which i've never really gotten too deep into

### How did I make this?

It's all HTMl, CSS, and JS! It's being served by a FastAPI backend which only routes all the files.

### What'd I struggle with, what'd I learn?

Probably getting a handle of HTMl, CSS, and JS! Believe it or not, most of my websites were made with Tailwind or like pyreact, and it abstracted out a lot of the code. This definitely helped me get a much better grip on JS, HTMl, and all the quirks of CSS.
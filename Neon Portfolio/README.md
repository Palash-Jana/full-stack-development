# Neon Portfolio Setup Guide
This Project is Created by Palash Jana
This project is a static neon-themed portfolio. You can open `index.html` directly in a browser, or host the folder on GitHub Pages, Netlify, Vercel static hosting, or any simple web server.

## Files

- `index.html` contains the content and section structure.
- `styles.css` contains the neon UI design and responsive layout.
- `script.js` contains the interactive effects like counters, filters, lightbox, and scroll progress.

## How To Add Your 3D Avatar

1. Put your 3D avatar file inside `assets/avatar/`.
2. Recommended file name: `avatar.glb`
3. Optional poster image name: `avatar-poster.jpg`
4. If your file name is different, update this line in `index.html`:

```html
<model-viewer src="assets/avatar/avatar.glb" ...></model-viewer>
```

Notes:

- `.glb` is the easiest format for web use.
- Keep the file size optimized if possible for faster loading.
- If you do not add the model yet, the fallback hologram stays visible.

## How To Add Certificates

Create these folders:

- `assets/avatar/`
- `assets/certificates/learning/`
- `assets/certificates/achievements/`

Then place your certificate images there, for example:

- `assets/certificates/learning/certificate-1.jpg`
- `assets/certificates/learning/certificate-2.jpg`
- `assets/certificates/achievements/hackathon-1.jpg`
- `assets/certificates/achievements/exhibition-1.jpg`

After that, update the related certificate buttons in `index.html`:

- Change the title text
- Change the subtitle text
- Change the `data-image` path
- Change the `data-type` value if needed

Example:

```html
<button
  class="certificate-card"
  data-title="AWS Cloud Certificate"
  data-image="assets/certificates/learning/aws-cloud.jpg"
  data-type="Learning"
>
```

## How To Add Your Achievements And Hackathon Details

Edit the `Achievement Timeline` section in `index.html`.

Replace:

- year
- heading
- description

with your real event names, ranks, exhibition names, or award details.

## How To Add Your Live Project Links

Inside the `Live Projects` section in `index.html`, update for each project:

- project title
- description
- technology tags
- `Live Demo` link
- `Source` link
- `data-category` if you want it under `web`, `ai`, or `web3`

If you need more projects, duplicate one full `<article class="project-card">...</article>` block.

## How To Add Your Name, Bio, Role, And Stats

Update these parts in `index.html`:

- page `<title>`
- `Hi, I'm Your Name`
- hero description paragraph
- role and focus box
- stat numbers in `data-target`

## How To Add GitHub, LinkedIn, YouTube, And Email

In the `Connect` section of `index.html`, replace these placeholders:

- `https://github.com/your-username`
- `https://www.linkedin.com/in/your-username`
- `https://www.youtube.com/@your-channel`
- `mailto:yourmail@example.com`

## How To Enable Web3Forms

1. Go to [Web3Forms](https://web3forms.com/).
2. Create your access key.
3. Replace this in `index.html`:

```html
<input type="hidden" name="access_key" value="YOUR_WEB3FORMS_ACCESS_KEY">
```

4. Keep the form `action` as:

```html
https://api.web3forms.com/submit
```

After that, messages from your portfolio form will be sent using Web3Forms.

## Suggested Asset Structure

```text
assets/
  avatar/
    avatar.glb
    avatar-poster.jpg
  certificates/
    learning/
      certificate-1.jpg
      certificate-2.jpg
    achievements/
      hackathon-1.jpg
      exhibition-1.jpg
```

## Quick Customization Checklist

- Replace `Your Name` with your real name
- Replace demo project text and links
- Add your real certificates
- Add your hackathon and exhibition achievements
- Add your `avatar.glb`
- Replace social links
- Add your Web3Forms key

## Optional Next Step

If you want, this can be upgraded next into:

- a React portfolio
- a portfolio with admin-editable JSON data
- a portfolio with a dark neon particle background
- a version deployed to GitHub Pages automatically

### Project Creadit
Creator: Palash Jana
Creator GitHib: https://github.com/Palash-Jana

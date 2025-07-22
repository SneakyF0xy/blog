---
title: Hello, Astro!
description: 5, 4, 3, 2, 1...Lift Off! A thrilling countdown to the stars — relive the launch moment that marked a giant leap into space exploration.
category: casual
date: 2025-07-12
tags:
  - space
  - stars
  - milkyway
---

<div class="epigraph">
<blockquote>
<p>An astronaut cannot be suspended in space and not have God in his mind and
his heart.</p>
<footer>Yuri Gagarin</footer>
</blockquote>
</div>

## Countdown to the Stars

T-minus 15 seconds. Guidance is internal.

12, 11, 10, 9,

Ignition Sequence Start.

6, 5, 4, 3, 2, 1, 0.

All engine running.

And **Lift-Off**! We have a Lift-Off! 32 minutes past the hour.
Lift-Off on Apollo 11! Tower Clear!

<figure>
<label for="mn-exports-imports" class="corner-toggle"></label>
<input type="checkbox" id="mn-exports-imports" class="corner-checkbox">
<span class="marginnote">The Apollo 11 Saturn V space vehicle lifted off with
Astronauts Neil A. Armstrong, Michael Collins and Edwin E. Aldrin Jr.
at 9:32 a.m. EDT July 16, 1969, from Kennedy Space Center's Launch Complex 39A.</span>
<!-- markdownlint-disable-next-line MD013 -->
<img src="https://upload.wikimedia.org/wikipedia/commons/1/16/Apollo_11_Launch_-_GPN-2000-000630.jpg" alt="Rocket Launch" width="1000"/>
</figure>

## Space Missions Comparison Table

| Mission       | Launch Date    | Destination      | Outcome        |
|---------------|----------------|------------------|----------------|
| Sputnik 1     | 1957-10-04     | Low Earth Orbit  | Success        |
| Apollo 11     | 1969-07-16     | Moon             | Success        |
| Voyager 1     | 1977-09-05     | Interstellar     | Active         |
| Artemis I     | 2022-11-16     | Lunar Orbit      | Uncrewed Test  |

## Orbital Mechanics Formula

To stay in stable circular orbit, an object must have velocity:

$$
  v = \sqrt{\frac{GM}{r}}
$$

Where:

- $G$ — gravitational constant,  
- $M$ — mass of the central body,  
- $r$ — radius of orbit.

## Simple Orbital Velocity Calculator

```python
import math

def orbital_velocity(mass_central_body, radius_orbit):
    G = 6.67430e-11
    return math.sqrt(G * mass_central_body / radius_orbit)


earth_mass = 5.972e24
earth_radius = 6371e3
altitude = 400e3

velocity = orbital_velocity(earth_mass, earth_radius + altitude)
print(f"Orbital velocity at 400km altitude: {velocity:.2f} m/s")
```

## Explore More

- [AstroBin](https://www.astrobin.com/) — Astrophotography platform
- [APOD](https://apod.nasa.gov/apod/astropix.html) — Astronomy Picture of the Day

## Keep Looking Up

Whether it's the whisper of distant quasars or the silent arcs of satellites,
the cosmos continues to inspire wonder, exploration, and unity.
Stay curious.

$\mathcal{S}$neaky$\mathcal{F}$oxy

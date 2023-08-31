import time
import os
import discord
from  random import randint
from requests import get
import asyncio
from dotenv import load_dotenv
load_dotenv()
DISCORD_TOKEN = os.getenv('DISCORD_TOKEN')
# DISCORD_TOKEN = os.environ['DISCORD_TOKEN']

# quotes =["You will Gap in your comfort zone!", "Are you using Pomodoros?", "**Eat the Frog 🐸**\nConquer the struggling tasks like a pro with the Eat the Frog strategy.", "**20 second rule; Ikk vaari**\nOne step forward - Ikk vaari shuru kar k ta'an dekh technique (for 20 sec)", "**3 seconds rule**\nDefy procrastination by moving into action within 3 seconds. ", "**Move before you are motivated**\nMove before you're motivated (Count down to 3 sec Rule and START!)", "**Sugoi! That was just your 40%**\nPush past the 40% potential barrier. Your brain got governors push that to 100% performance", "**Procrastination steals your time; seize it back with dominance.**\nProcrastination is the thief of time, your enemy. (Dominate it, before it takes charge on yourself)", "**Dream ↑  Efforts ↑ ( D ∝ E)**\nAs your dreams rise, let your efforts soar.", "**You must ACT!**\n Indecision is the enemy; decisive action is the key.", "**Put ENERGY, Get RESULTS**\nInvest your energy, harvest incredible results.", "**Cut fkin' distractions**\nAchievement demands focus; eliminate distractions ruthlessly.", "The harder the battle, the sweeter the victory.", "FEAR is temporary, REGRET is permanent"]
# for i in range(0, len(quotes)):
#     print(f"{quotes[i]}")

intent=discord.Intents.default()
client=discord.Client(intents=intent)

@client.event
async def on_ready():
    print(f'Logged in As {client.user}')
    try:
        for _ in range(1):
            await send_message()
    except Exception as e:
        print(e)
    finally:
        await client.close() # To clso the connection after out job is done


quotes =["""Are you using Pomodoros?""", """Eat the Frog 🐸; Conquer the struggling tasks like a pro with the Eat the Frog strategy.""", """20 second rule; Just Ikk Vaari -  One step forward - Ikk vaari shuru kar k ta'an dekh technique (for 20 sec)""", """3 seconds rule; Defy procrastination by moving into action within 3 seconds. """, """Move before you're motivated (Count down to 3 sec Rule and START!)""", """Fly past the governer of 40%, the 40% potential barrier. Push that to 100% performance""", """Procrastination is the thief of time, your enemy. (Dominate it, before it takes charge on yourself)""", """Dream ↑  Efforts ↑ ( D ∝ E); As your dreams rise, let your efforts soar.""", """You must ACT! Indecision is the enemy; decisive action is the key.""",  """Put ENERGY, Get RESULTS; Invest your energy, harvest incredible results.""", """Cut fkin' distractions; Achievement demands focus; eliminate distractions ruthlessly.""", """The harder the battle, the sweeter the victory.""", """FEAR is temporary, REGRET is permanent"""]


async def send_message():

    mention='<@788713878963748876>'
    embed_colors=[0xf8fafc, 0x64748b, 0xfed7aa, 0xf97316, 0xfef3c7, 0xfbbf24, 0xecfccb, 0x22c55e, 0x0d9488, 0x22d3ee, 0x0ea5e9, 0x8b5cf6, 0xf9a8d4, 0xf472b6, 0xfda4af]
    channel_id=1145785026894639205 #quote-notifs
    channel = client.get_channel(channel_id)
    choice = randint(0, len(embed_colors)-1)

    # commented one is with footer
    # embedtry=discord.Embed(description=f"{quotes[randint(0, len(quotes)-1)]} @{mention}", footer=f"Color selected: {embed_colors[choice]}", color=embed_colors[choice])
    embedtry=discord.Embed(description=f"{quotes[randint(0, len(quotes)-1)]} {mention}", color=embed_colors[choice])
    await channel.send(embed=embedtry)

client.run(DISCORD_TOKEN)
print("Success!")
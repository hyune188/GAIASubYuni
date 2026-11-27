import os
import sys

STDIO = os.path.join(os.path.dirname(__file__), "server", "stdio")
SERVERS = {
    "random_number": {
        "command": sys.executable,
        "args": [os.path.join(STDIO, "random_number.py")],
        "transport": "stdio",
    },
    "roll_dice": {
        "url": "http://localhost:8000/mcp",
        "transport": "streamable_http",
    },
}
names = ["たかしほ", "みやうち", "おだ", "おの", "しとみ"]
places = ["白山", "オフィス", "家", "カフェ", "焼津ポーターズ", "アフガニスタン"]
verbs = ["鼻をかんだ", "走った", "買い物をした", "お風呂に入った", "叫んだ", "ハッキングをした", "持ち上げた"]

import random

print("""<html>
<body>
<h1>今日のニュース</h1>""")

for i in range(5):
	print("<p>" + names[random.randint(0,-1 + len(names))] + "は" + places[random.randint(0,-1 + len(places))] + "で" + verbs[random.randint(0,-1 + len(verbs))] + "。</p>")

print("""</h1>
</body>
</html>
""")
import base_entities

class CPU(BaseServerStructure):
	def __init__(self, name="CPU", hp=1000, level=1, r1_storage_cap=1000, r2_storage_cap=1000, r1_cur_storage=0, r2_cur_storage=0):
		self.r1_cur_storage = r1_cur_storage
		self.r2_cur_storage = r2_cur_storage
		self.r1_storage_cap = r1_storage_cap
		self.r2_storage_cap = r2_storage_cap
		BaseServerStructure.__init__(self, name, hp, level)

class Wall(BaseServerStructure):
	def __init__(self, name="Wall", hp=2000):
		self.name = name
		self.hp = hp

class R1Collector(BaseServerStructure):
	def _init__(self, name="R1Collector", hp=500, level=1, r1_cur_storage=0, r1_storage_cap=1000, r1_collection_rate=1):
		self.r1_cur_storage = r1_cur_storage
		self.r1_storage_cap = r1_storage_cap
		self.r1_collection_rate = r1_collection_rate
		BaseServerStructure.__init__(self, name, hp, level)

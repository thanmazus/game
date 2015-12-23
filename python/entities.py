from base_entities import BaseServerStructure, BaseVirusUnit


class CPU(BaseServerStructure):
    def __init__(self, name="CPU", hp=1000, level=1, r1_storage_cap=1000,
                 r2_storage_cap=1000, r1_cur_storage=0, r2_cur_storage=0):
        BaseServerStructure.__init__(self, name, hp, level)
        self.r1_cur_storage = r1_cur_storage
        self.r2_cur_storage = r2_cur_storage
        self.r1_storage_cap = r1_storage_cap
        self.r2_storage_cap = r2_storage_cap


class Wall(BaseServerStructure):
    def __init__(self, name="Wall", hp=2000, level=1):
        BaseServerStructure.__init__(self, name, hp, level)


class R1Collector(BaseServerStructure):
    def __init__(self, name="R1Collector", hp=500, level=1, r1_cur_storage=0,
                 r1_storage_cap=1000, r1_collection_rate=1):
        BaseServerStructure.__init__(self, name, hp, level)
        self.r1_cur_storage = r1_cur_storage
        self.r1_storage_cap = r1_storage_cap
        self.r1_collection_rate = r1_collection_rate


class R2Collector(BaseServerStructure):
    def __init__(self, name="R2Collector", hp=500, level=1, r2_cur_storage=0,
                 r2_storage_cap=1000, r2_collection_rate=1):
        BaseServerStructure.__init__(self, name, hp, level)
        self.r2_cur_storage = r2_cur_storage
        self.r2_storage_cap = r2_storage_cap
        self.r2_collection_rate = r2_collection_rate


class Worm(BaseVirusUnit):
    def __init__(self, name="Worm", hp=100, level=1, damage=100, speed=1):
        BaseVirusUnit.__init__(self, name, hp, level, damage, speed)


class Bot(BaseVirusUnit):
    def __init__(self, name="Bot", hp=150, level=1, damage=80, speed=1):
        BaseVirusUnit.__init__(self, name, hp, level, damage, speed)

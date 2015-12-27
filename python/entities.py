from base_entities import (BaseServerStructure, BaseVirusUnit, BaseCharacter,
                           BaseWeapon, BaseArmor)


class Sword(BaseWeapon):
    def __init__(self, name='Sword', level=1, damage=5, attack_speed=1.50):
        BaseWeapon.__init__(self, name, level, damage, attack_speed)


class Dagger(BaseWeapon):
    def __init__(self, name='Dagger', level=1, damage=2, attack_speed=2.00):
        BaseWeapon.__init__(self, name, level, damage, attack_speed)


class ChestArmor(BaseArmor):
    def __init__(self, name='Chest Armor', level=1, phy_defense=10,
                 mag_defense=10):
        BaseArmor.__init__(self, name, level, phy_defense, mag_defense)


class Human(BaseCharacter):
    def __init__(self, name='Human Character', level=1, hp=150, strength=5,
                 dexterity=6, wisdom=6, phy_defense=60, mag_defense=60):
        BaseCharacter.__init__(self, name, level, hp, strength, dexterity,
                               wisdom, phy_defense, mag_defense)


class Elf(BaseCharacter):
    def __init__(self, name='Elven Character', level=1, hp=130, strength=4,
                 dexterity=7, wisdom=6, phy_defense=40, mag_defense=70):
        BaseCharacter.__init__(self, name, level, hp, strength, dexterity,
                               wisdom, phy_defense, mag_defense)


class CPU(BaseServerStructure):
    def __init__(self, name='CPU', hp=1000, level=1, r1_storage_cap=1000,
                 r2_storage_cap=1000, r1_cur_storage=0, r2_cur_storage=0):
        BaseServerStructure.__init__(self, name, hp, level)
        self.r1_cur_storage = r1_cur_storage
        self.r2_cur_storage = r2_cur_storage
        self.r1_storage_cap = r1_storage_cap
        self.r2_storage_cap = r2_storage_cap


class Wall(BaseServerStructure):
    def __init__(self, name='Wall', hp=2000, level=1):
        BaseServerStructure.__init__(self, name, hp, level)


class R1Collector(BaseServerStructure):
    def __init__(self, name='R1Collector', hp=500, level=1, r1_cur_storage=0,
                 r1_storage_cap=1000, r1_collection_rate=1):
        BaseServerStructure.__init__(self, name, hp, level)
        self.r1_cur_storage = r1_cur_storage
        self.r1_storage_cap = r1_storage_cap
        self.r1_collection_rate = r1_collection_rate


class R2Collector(BaseServerStructure):
    def __init__(self, name='R2Collector', hp=500, level=1, r2_cur_storage=0,
                 r2_storage_cap=1000, r2_collection_rate=1):
        BaseServerStructure.__init__(self, name, hp, level)
        self.r2_cur_storage = r2_cur_storage
        self.r2_storage_cap = r2_storage_cap
        self.r2_collection_rate = r2_collection_rate


class Worm(BaseVirusUnit):
    def __init__(self, name='Worm', hp=100, level=1, damage=100, speed=1):
        BaseVirusUnit.__init__(self, name, hp, level, damage, speed)


class Bot(BaseVirusUnit):
    def __init__(self, name='Bot', hp=150, level=1, damage=80, speed=1):
        BaseVirusUnit.__init__(self, name, hp, level, damage, speed)

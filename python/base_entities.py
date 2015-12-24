class BaseServerStructure(object):
    """Base class of all structures that can be built in a server."""

    def __init__(self, name='Base Structure', hp=100, level=1):
        self.name = name
        self.hp = hp
        self.level = level


class BaseVirusUnit(object):
    """Base class of all viruses that can be created for attacking others."""

    def __init__(self, name='Base Virus', hp=100, level=1, damage=1, speed=1):
        self.name = name
        self.hp = hp
        self.damage = damage
        self.level = level
        self.speed = speed


class BaseWeapon(object):
    """Base class of all weapons that can be equipped by players
    and monsters."""

    def __init__(self, name='Base Weapon', level=1, damage=2,
                 attack_speed=1.00):
        self.name = name
        self.level = level
        self.damage = damage
        self.attack_speed = attack_speed


class BaseArmor(object):
    """Base class of all armor that can be equipped by players and monsters."""

    def __init__(self, name='Base Armor', level=1, phy_defense=1,
                 mag_defense=1):
        self.name = name
        self.level = level
        self.phy_defense = phy_defense
        self.mag_defense = mag_defense


class BaseCharacter(object):
    """Base class for all characters."""

    def __init__(self, name='Base Character', level=1, hp=100, strength=5,
                 dexterity=5, wisdom=5, phy_defense=50, mag_defense=50):
        self.name = name
        self.level = level
        self.hp = hp
        self.strength = strength
        self.dexterity = dexterity
        self.wisdom = wisdom
        self.phy_defense = phy_defense
        self.mag_defense = mag_defense

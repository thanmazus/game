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
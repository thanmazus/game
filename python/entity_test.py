from base_entities import BaseServerStructure, BaseVirusUnit
from entities import CPU, Wall, R1Collector, R2Collector, Worm, Bot
import unittest


class EntityTest(unittest.TestCase):

    def test_cpu(self):
        test_cpu = CPU()
        self.assertIsInstance(test_cpu, CPU)
        self.assertEqual(test_cpu.name, 'CPU')
        self.assertEqual(test_cpu.hp, 1000)
        self.assertEqual(test_cpu.level, 1)
        self.assertEqual(test_cpu.r1_storage_cap, 1000)
        self.assertEqual(test_cpu.r2_storage_cap, 1000)
        self.assertEqual(test_cpu.r1_cur_storage, 0)
        self.assertEqual(test_cpu.r1_cur_storage, 0)

    def test_wall(self):
        test_wall = Wall()
        self.assertIsInstance(test_wall, Wall)
        self.assertEqual(test_wall.name, 'Wall')
        self.assertEqual(test_wall.hp, 2000)
        self.assertEqual(test_wall.level, 1)

    def test_r1_collector(self):
        test_r1 = R1Collector()
        self.assertIsInstance(test_r1, R1Collector)
        self.assertEqual(test_r1.name, 'R1Collector')
        self.assertEqual(test_r1.hp, 500)
        self.assertEqual(test_r1.level, 1)
        self.assertEqual(test_r1.r1_storage_cap, 1000)
        self.assertEqual(test_r1.r1_cur_storage, 0)
        self.assertEqual(test_r1.r1_collection_rate, 1)

    def test_r2_collector(self):
        test_r2 = R2Collector()
        self.assertIsInstance(test_r2, R2Collector)
        self.assertEqual(test_r2.name, 'R2Collector')
        self.assertEqual(test_r2.hp, 500)
        self.assertEqual(test_r2.level, 1)
        self.assertEqual(test_r2.r2_storage_cap, 1000)
        self.assertEqual(test_r2.r2_cur_storage, 0)
        self.assertEqual(test_r2.r2_collection_rate, 1)

    def test_worm(self):
        test_worm = Worm()
        self.assertIsInstance(test_worm, Worm)
        self.assertEqual(test_worm.name, 'Worm')
        self.assertEqual(test_worm.hp, 100)
        self.assertEqual(test_worm.level, 1)
        self.assertEqual(test_worm.damage, 100)
        self.assertEqual(test_worm.speed, 1)

    def test_bot(self):
        test_bot = Bot()
        self.assertIsInstance(test_bot, Bot)
        self.assertEqual(test_bot.name, 'Bot')
        self.assertEqual(test_bot.hp, 150)
        self.assertEqual(test_bot.level, 1)
        self.assertEqual(test_bot.damage, 80)
        self.assertEqual(test_bot.speed, 1)


suite = unittest.TestLoader().loadTestsFromTestCase(EntityTest)
unittest.TextTestRunner(verbosity=2).run(suite)

from base_entities import BaseServerStructure, BaseVirusUnit
from entities import CPU, Wall, R1Collector, Worm
import unittest


class EntityTest(unittest.TestCase):

    def test_cpu(self):
        testCPU = CPU()
        self.assertIsInstance(testCPU, CPU)
        self.assertEqual(testCPU.name, 'CPU')
        self.assertEqual(testCPU.hp, 1000)
        self.assertEqual(testCPU.level, 1)
        self.assertEqual(testCPU.r1_storage_cap, 1000)
        self.assertEqual(testCPU.r2_storage_cap, 1000)
        self.assertEqual(testCPU.r1_cur_storage, 0)
        self.assertEqual(testCPU.r1_cur_storage, 0)

    def test_wall(self):
        testWall = Wall()
        self.assertIsInstance(testWall, Wall)
        self.assertEqual(testWall.name, 'Wall')
        self.assertEqual(testWall.hp, 2000)
        self.assertEqual(testWall.level, 1)

    def test_r1_collector(self):
        testR1 = R1Collector()
        self.assertIsInstance(testR1, R1Collector)
        self.assertEqual(testR1.name, 'R1Collector')
        self.assertEqual(testR1.hp, 500)
        self.assertEqual(testR1.level, 1)
        self.assertEqual(testR1.r1_storage_cap, 1000)
        self.assertEqual(testR1.r1_cur_storage, 0)
        self.assertEqual(testR1.r1_collection_rate, 1)

    def test_worm(self):
        testWorm = Worm()
        self.assertIsInstance(testWorm, Worm)
        self.assertEqual(testWorm.name, 'Worm')
        self.assertEqual(testWorm.hp, 100)
        self.assertEqual(testWorm.level, 1)
        self.assertEqual(testWorm.damage, 100)
        self.assertEqual(testWorm.speed, 1)


suite = unittest.TestLoader().loadTestsFromTestCase(EntityTest)
unittest.TextTestRunner(verbosity=2).run(suite)

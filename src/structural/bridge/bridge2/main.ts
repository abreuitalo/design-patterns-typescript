import { Quadrado } from './abstration/quadrado';
import { LinuxPlataform } from './implementation/linux-plataform';
import { WindowsPlataform } from './implementation/windows-plataform';

const linux = new LinuxPlataform();
const quadradoLinux = new Quadrado(linux);

const windows = new WindowsPlataform();
const quadradoWindows = new Quadrado(windows);

quadradoLinux.desenhar();
quadradoWindows.desenhar();

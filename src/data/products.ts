export type Product = {
  id: number;
  name: string;
  category: "Microcontrollers" | "Sensors" | "Power" | "Actuators";
  price: number;
  image: string;
  badge?: "Best Seller" | "New Arrival";
  shortDesc: string;
  description: string;
  specs: { label: string; value: string }[];
  datasheetUrl?: string;
  relatedIds: number[];
};

export const products: Product[] = [
  {
    id: 1,
    name: "Arduino Uno R3",
    category: "Microcontrollers",
    price: 1800,
    image: "https://images.unsplash.com/photo-1608564697071-ddf911d81370?w=400&h=400&fit=crop",
    badge: "Best Seller",
    shortDesc: "ATmega328P-based development board",
    description: "The Arduino Uno R3 is the most popular microcontroller board based on the ATmega328P. It has 14 digital I/O pins, 6 analog inputs, a 16 MHz ceramic resonator, USB connection, power jack, ICSP header, and a reset button. Perfect for beginners and advanced prototyping.",
    specs: [
      { label: "Microcontroller", value: "ATmega328P" },
      { label: "Operating Voltage", value: "5V" },
      { label: "Input Voltage", value: "7-12V" },
      { label: "Digital I/O Pins", value: "14" },
      { label: "Analog Input Pins", value: "6" },
      { label: "Clock Speed", value: "16 MHz" },
      { label: "Interface", value: "USB Type-B" },
    ],
    datasheetUrl: "#",
    relatedIds: [2, 3, 5],
  },
  {
    id: 2,
    name: "ESP32 DevKit V1",
    category: "Microcontrollers",
    price: 1200,
    image: "https://images.unsplash.com/photo-1553406830-ef2513450d76?w=400&h=400&fit=crop",
    badge: "Best Seller",
    shortDesc: "Wi-Fi + Bluetooth dual-core MCU",
    description: "The ESP32 DevKit V1 features a powerful dual-core processor with built-in Wi-Fi and Bluetooth. Ideal for IoT projects, smart home automation, and wireless sensor networks. Supports Arduino IDE and MicroPython.",
    specs: [
      { label: "Processor", value: "Xtensa LX6 Dual-Core" },
      { label: "Operating Voltage", value: "3.3V" },
      { label: "Flash Memory", value: "4MB" },
      { label: "Wi-Fi", value: "802.11 b/g/n" },
      { label: "Bluetooth", value: "v4.2 BR/EDR + BLE" },
      { label: "GPIO Pins", value: "36" },
      { label: "Interface", value: "Micro USB" },
    ],
    datasheetUrl: "#",
    relatedIds: [1, 5, 6],
  },
];

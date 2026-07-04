export type Product = {
  id: string;
  name: string;
  category: string;
  description?: string;
  price: number;
  imageUrl: string;
  inStock: boolean;
};

const IMG = {
  raspberryPi:
    "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Raspberry_Pi_4_Model_B_-_Side.jpg/440px-Raspberry_Pi_4_Model_B_-_Side.jpg",
  heatsink:
    "https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/Heatsink.jpg/440px-Heatsink.jpg",
  powerAdapter:
    "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/AC_adapter.jpg/440px-AC_adapter.jpg",
  hdmiVga:
    "https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/HDMI_Adapter.jpg/440px-HDMI_Adapter.jpg",
  sdCard:
    "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3d/MicroSD_card.jpg/440px-MicroSD_card.jpg",
  sdReader:
    "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/Card_reader.jpg/440px-Card_reader.jpg",
  nodeMcu:
    "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/NodeMCU_DEVKIT_1.0.jpg/440px-NodeMCU_DEVKIT_1.0.jpg",
  cable:
    "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/USB-Micro-B-connector.jpg/440px-USB-Micro-B-connector.jpg",
  arduino:
    "https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/Arduino_Uno_-_R3.jpg/440px-Arduino_Uno_-_R3.jpg",
  arduinoMega:
    "https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Arduino_Mega_2560.jpg/440px-Arduino_Mega_2560.jpg",
  led: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e8/LEDs.jpg/440px-LEDs.jpg",
  rgbLed:
    "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/RGB_LED.jpg/440px-RGB_LED.jpg",
  sensor:
    "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Infrared_sensor.jpg/440px-Infrared_sensor.jpg",
  lcd: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/39/LCD_16x2.jpg/440px-LCD_16x2.jpg",
  motor:
    "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/DC_motor.jpg/440px-DC_motor.jpg",
  gearMotor:
    "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/Gearmotor.jpg/440px-Gearmotor.jpg",
  sevenSegment:
    "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/Seven-segment_display.jpg/440px-Seven-segment_display.jpg",
  relay:
    "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/Relay.jpg/440px-Relay.jpg",
  potentiometer:
    "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Potentiometer.jpg/440px-Potentiometer.jpg",
  resistor:
    "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/Resistors.jpg/440px-Resistors.jpg",
  ic: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/Integrated_circuit.jpg/440px-Integrated_circuit.jpg",
  stepper:
    "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Stepper_motor.jpg/440px-Stepper_motor.jpg",
  servo:
    "https://upload.wikimedia.org/wikipedia/commons/thumb/3/37/Servo_motor.jpg/440px-Servo_motor.jpg",
  irReceiver:
    "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/IR_receiver.jpg/440px-IR_receiver.jpg",
  gsm: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4a/GSM_module.jpg/440px-GSM_module.jpg",
  rtc: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/Real-time_clock_module.jpg/440px-Real-time_clock_module.jpg",
  battery:
    "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/CR2032_battery.jpg/440px-CR2032_battery.jpg",
  lora: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f4/LoRa_module.jpg/440px-LoRa_module.jpg",
  driver:
    "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/Integrated_circuit.jpg/440px-Integrated_circuit.jpg",
  flowSensor:
    "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f4/Flow_sensor.jpg/440px-Flow_sensor.jpg",
  ultrasonic:
    "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Ultrasonic_sensor.jpg/440px-Ultrasonic_sensor.jpg",
  soldering:
    "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/Soldering_iron.jpg/440px-Soldering_iron.jpg",
  breadboard:
    "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0d/Breadboard.jpg/440px-Breadboard.jpg",
  multimeter:
    "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/Digital_multimeter.jpg/440px-Digital_multimeter.jpg",
  dotBoard:
    "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Perfboard.jpg/440px-Perfboard.jpg",
  buzzer:
    "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/Buzzer.jpg/440px-Buzzer.jpg",
  switch:
    "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Toggle_switch_%28side_view%29.jpg/440px-Toggle_switch_%28side_view%29.jpg",
  wire: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Electrical_wires.jpg/440px-Electrical_wires.jpg",
  bluetooth:
    "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2e/Bluetooth_module.jpg/440px-Bluetooth_module.jpg",
  powerSupply:
    "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/AC_adapter.jpg/440px-AC_adapter.jpg",
  rs232:
    "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4a/RS-232_adapter.jpg/440px-RS-232_adapter.jpg",
  remote:
    "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/IR_remote_control.jpg/440px-IR_remote_control.jpg",
  extension:
    "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/Power_strip.jpg/440px-Power_strip.jpg",
  leadAcid:
    "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Lead-acid_battery.jpg/440px-Lead-acid_battery.jpg",
  burg:
    "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0d/Breadboard.jpg/440px-Breadboard.jpg",
  tools:
    "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/Soldering_iron.jpg/440px-Soldering_iron.jpg",
};

export const products: Product[] = [
  { id: "p001", name: "Raspberry Pi4 Controller Board 2GB RAM", category: "Controller Boards", price: 3550, imageUrl: IMG.raspberryPi, inStock: true },
  { id: "p002", name: "Raspberry Pi4 Controller Board 4GB RAM", category: "Controller Boards", price: 4950, imageUrl: IMG.raspberryPi, inStock: true },
  { id: "p003", name: "Raspberry Pi Heat Sink", category: "Accessories", price: 40, imageUrl: IMG.heatsink, inStock: true },
  { id: "p004", name: "Power Adaptor 5V/2A With Type C Cable", category: "Power Supply", price: 390, imageUrl: IMG.powerAdapter, inStock: true },
  { id: "p005", name: "HDMI To VGA Convertor", category: "Accessories", price: 260, imageUrl: IMG.hdmiVga, inStock: true },
  { id: "p006", name: "SD Card Reader", category: "Accessories", price: 25, imageUrl: IMG.sdReader, inStock: true },
  { id: "p007", name: "Node MCU", category: "Controller Boards", price: 325, imageUrl: IMG.nodeMcu, inStock: true },
  { id: "p008", name: "NodeMCU Cable", category: "Cables", price: 80, imageUrl: IMG.cable, inStock: true },
  { id: "p009", name: "SD Card 32GB Class 10", category: "Storage", price: 350, imageUrl: IMG.sdCard, inStock: true },
  { id: "p010", name: "Arduino Mega", category: "Controller Boards", price: 850, imageUrl: IMG.arduinoMega, inStock: true },
  { id: "p011", name: "USB A To B Arduino Programming Cable", category: "Cables", price: 60, imageUrl: IMG.cable, inStock: true },
  { id: "p012", name: "LED", category: "Components", price: 1, imageUrl: IMG.led, inStock: true },
  { id: "p013", name: "RGB LED", category: "Components", price: 8, imageUrl: IMG.rgbLed, inStock: true },
  { id: "p014", name: "DHT11 Temperature And Humidity Sensor", category: "Sensors", price: 130, imageUrl: IMG.sensor, inStock: true },
  { id: "p015", name: "LM35 Sensor", category: "Sensors", price: 60, imageUrl: IMG.sensor, inStock: true },
  { id: "p016", name: "LCD 16x2 With Breakout Board", category: "Displays", price: 50, imageUrl: IMG.lcd, inStock: true },
  { id: "p017", name: "12V DC Motor", category: "Motors", price: 150, imageUrl: IMG.motor, inStock: true },
  { id: "p018", name: "12V DC Gear Motor", category: "Motors", price: 160, imageUrl: IMG.gearMotor, inStock: true },
  { id: "p019", name: "Seven Segment Display", category: "Displays", price: 10, imageUrl: IMG.sevenSegment, inStock: true },
  { id: "p020", name: "4 Digit Seven Segment Display Module", category: "Displays", price: 130, imageUrl: IMG.sevenSegment, inStock: true },
  { id: "p021", name: "Single Channel 12V Relay Module", category: "Modules", price: 60, imageUrl: IMG.relay, inStock: true },
  { id: "p022", name: "Air Quality Sensor MQ135", category: "Sensors", price: 240, imageUrl: IMG.sensor, inStock: true },
  { id: "p023", name: "10K Potentiometer", category: "Components", price: 15, imageUrl: IMG.potentiometer, inStock: true },
  { id: "p024", name: "Preset For LCD 10K", category: "Components", price: 3, imageUrl: IMG.potentiometer, inStock: true },
  { id: "p025", name: "Trimpot For LCD 10K", category: "Components", price: 10, imageUrl: IMG.potentiometer, inStock: true },
  { id: "p026", name: "Resistor 1K, 10K 0.25W", category: "Components", price: 0.5, imageUrl: IMG.resistor, inStock: true },
  { id: "p027", name: "IC MCP3008", category: "Components", price: 300, imageUrl: IMG.ic, inStock: true },
  { id: "p028", name: "Stepper Motor 5V Mini", category: "Motors", price: 100, imageUrl: IMG.stepper, inStock: true },
  { id: "p029", name: "Stepper Motor 12V", category: "Motors", price: 300, imageUrl: IMG.stepper, inStock: true },
  { id: "p030", name: "NEMA 17 4KG Stepper Motor", category: "Motors", price: 700, imageUrl: IMG.stepper, inStock: true },
  { id: "p031", name: "SG90 Servo Motor", category: "Motors", price: 130, imageUrl: IMG.servo, inStock: true },
  { id: "p032", name: "TSOP1738", category: "Components", price: 40, imageUrl: IMG.irReceiver, inStock: true },
  { id: "p033", name: "GSM Module SIM800C With RS232", category: "Modules", price: 1000, imageUrl: IMG.gsm, inStock: true },
  { id: "p034", name: "GSM Module SIM800L", category: "Modules", price: 490, imageUrl: IMG.gsm, inStock: true },
  { id: "p035", name: "RTC DS3231", category: "Modules", price: 190, imageUrl: IMG.rtc, inStock: true },
  { id: "p036", name: "Battery For RTC", category: "Components", price: 10, imageUrl: IMG.battery, inStock: true },
  { id: "p037", name: "LoRa Module SX1278 With Antenna", category: "Modules", price: 600, imageUrl: IMG.lora, inStock: true },
  { id: "p038", name: "L293D Module", category: "Modules", price: 120, imageUrl: IMG.driver, inStock: true },
  { id: "p039", name: "Water Sensor", category: "Sensors", price: 140, imageUrl: IMG.sensor, inStock: true },
  { id: "p040", name: "Soil Moisture Sensor", category: "Sensors", price: 100, imageUrl: IMG.sensor, inStock: true },
  { id: "p041", name: "Water Flow Sensor", category: "Sensors", price: 400, imageUrl: IMG.flowSensor, inStock: true },
  { id: "p042", name: "LDR Sensor", category: "Sensors", price: 8, imageUrl: IMG.sensor, inStock: true },
  { id: "p043", name: "LDR Module", category: "Sensors", price: 90, imageUrl: IMG.sensor, inStock: true },
  { id: "p044", name: "Ultrasonic Module", category: "Sensors", price: 95, imageUrl: IMG.ultrasonic, inStock: true },
  { id: "p045", name: "Power Adaptor 12V/1A", category: "Power Supply", price: 110, imageUrl: IMG.powerAdapter, inStock: true },
  { id: "p046", name: "Power Adaptor Good Quality", category: "Power Supply", price: 190, imageUrl: IMG.powerAdapter, inStock: true },
  { id: "p047", name: "Soldering Rod With Stand", category: "Tools", price: 190, imageUrl: IMG.soldering, inStock: true },
  { id: "p048", name: "Soldering Rod Soldron With Stand", category: "Tools", price: 400, imageUrl: IMG.soldering, inStock: true },
  { id: "p049", name: "Soldering Lead 100gm", category: "Tools", price: 160, imageUrl: IMG.soldering, inStock: true },
  { id: "p050", name: "1x40 Berg Female", category: "Connectors", price: 8, imageUrl: IMG.burg, inStock: true },
  { id: "p051", name: "1x40 Berg Male", category: "Connectors", price: 5, imageUrl: IMG.burg, inStock: true },
  { id: "p052", name: "Jumper All Type 1x40", category: "Connectors", price: 80, imageUrl: IMG.wire, inStock: true },
  { id: "p053", name: "Desoldering Pump", category: "Tools", price: 100, imageUrl: IMG.tools, inStock: true },
  { id: "p054", name: "Desoldering Wick", category: "Tools", price: 15, imageUrl: IMG.soldering, inStock: true },
  { id: "p055", name: "Wire Cutter", category: "Tools", price: 50, imageUrl: IMG.tools, inStock: true },
  { id: "p056", name: "Screw Driver Kit", category: "Tools", price: 280, imageUrl: IMG.tools, inStock: true },
  { id: "p057", name: "Bread Board", category: "Prototyping", price: 60, imageUrl: IMG.breadboard, inStock: true },
  { id: "p058", name: "Bread Board Good Quality", category: "Prototyping", price: 160, imageUrl: IMG.breadboard, inStock: true },
  { id: "p059", name: "Multimeter Cheap", category: "Tools", price: 180, imageUrl: IMG.multimeter, inStock: true },
  { id: "p060", name: "Multimeter Mastech 830L", category: "Tools", price: 600, imageUrl: IMG.multimeter, inStock: true },
  { id: "p061", name: "Multimeter Vartech 101 Autorange", category: "Tools", price: 1500, imageUrl: IMG.multimeter, inStock: true },
  { id: "p062", name: "Multimeter LCR Vartech", category: "Tools", price: 3500, imageUrl: IMG.multimeter, inStock: true },
  { id: "p063", name: "Dot Board 4x4", category: "Prototyping", price: 25, imageUrl: IMG.dotBoard, inStock: true },
  { id: "p064", name: "Dot Board 6x4", category: "Prototyping", price: 35, imageUrl: IMG.dotBoard, inStock: true },
  { id: "p065", name: "5V Buzzer", category: "Components", price: 15, imageUrl: IMG.buzzer, inStock: true },
  { id: "p066", name: "Buzzer Module", category: "Modules", price: 90, imageUrl: IMG.buzzer, inStock: true },
  { id: "p067", name: "4 Leg Micro Switches", category: "Switches", price: 2, imageUrl: IMG.switch, inStock: true },
  { id: "p068", name: "Single Core Wire Pocket", category: "Wires", price: 25, imageUrl: IMG.wire, inStock: true },
  { id: "p069", name: "Ribbon Wire", category: "Wires", description: "Price per meter", price: 20, imageUrl: IMG.wire, inStock: true },
  { id: "p070", name: "Ribbon Wire Thick", category: "Wires", description: "Price per meter", price: 40, imageUrl: IMG.wire, inStock: true },
  { id: "p071", name: "Bluetooth Module HC-05", category: "Modules", price: 320, imageUrl: IMG.bluetooth, inStock: true },
  { id: "p072", name: "ULN2003A Driver IC With Board", category: "Modules", price: 140, imageUrl: IMG.driver, inStock: true },
  { id: "p073", name: "Bluetooth Module HC-06", category: "Modules", price: 390, imageUrl: IMG.bluetooth, inStock: true },
  { id: "p074", name: "Fire Sensor", category: "Sensors", price: 90, imageUrl: IMG.sensor, inStock: true },
  { id: "p075", name: "PIR Sensor", category: "Sensors", price: 130, imageUrl: IMG.sensor, inStock: true },
  { id: "p076", name: "IR Sensor", category: "Sensors", price: 50, imageUrl: IMG.sensor, inStock: true },
  { id: "p077", name: "Smoke Sensor", category: "Sensors", price: 150, imageUrl: IMG.sensor, inStock: true },
  { id: "p078", name: "Sound Sensor", category: "Sensors", price: 90, imageUrl: IMG.sensor, inStock: true },
  { id: "p079", name: "Power Supply Board", category: "Power Supply", price: 150, imageUrl: IMG.powerSupply, inStock: true },
  { id: "p080", name: "USB To RS232 Convertor", category: "Accessories", price: 350, imageUrl: IMG.rs232, inStock: true },
  { id: "p081", name: "IR Remote", category: "Accessories", price: 40, imageUrl: IMG.remote, inStock: true },
  { id: "p082", name: "Extension Box 4 Way", category: "Power Supply", price: 400, imageUrl: IMG.extension, inStock: true },
  { id: "p083", name: "Battery 12V/1.3AH", category: "Power Supply", price: 450, imageUrl: IMG.leadAcid, inStock: true },
];

export function getProductById(id: string): Product | undefined {
  return products.find((p) => p.id === id);
}

export function getProductsByCategory(category: string): Product[] {
  return products.filter((p) => p.category === category);
}

export function getCategories(): string[] {
  return [...new Set(products.map((p) => p.category))].sort();
}

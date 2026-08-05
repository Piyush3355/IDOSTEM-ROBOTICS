const products = [
  { id:1, name:'Arduino UNO Starter Kit — Basic', price:999, origPrice:1499, discount:'33% OFF', age:'Class 6–10', category:'arduino', tag:'Bestseller', borderColor:'#00f0ff', gradient:'linear-gradient(160deg,rgba(0,240,255,0.10) 0%,rgba(6,9,25,0.95) 100%)', spotlight:'rgba(0,240,255,0.22)', image:'assets/images/prod_arduino_uno.png', desc:'Perfect first kit. Arduino UNO R3, breadboard, 30+ components & 15 beginner experiments with step-by-step PDF manual.', highlights:['Arduino UNO R3 Board','15+ Beginner Experiments','LED, Sensors & Jumper Wires','Step-by-Step PDF Manual'] },
  { id:2, name:'Arduino UNO Advanced Project Kit', price:1799, origPrice:2699, discount:'33% OFF', age:'Class 8–12', category:'arduino', tag:'Popular', borderColor:'#f59e0b', gradient:'linear-gradient(165deg,rgba(245,158,11,0.10) 0%,rgba(6,9,25,0.95) 100%)', spotlight:'rgba(245,158,11,0.22)', image:'assets/images/prod_arduino_uno.png', desc:'40+ components, LCD display, servo motor, IR remote, DHT11 sensor & 25 project tutorials.', highlights:['Arduino UNO + 40 Components','16×2 LCD Display Module','DHT11 Temp & Humidity Sensor','25 Project Tutorials'] },
  { id:3, name:'Arduino Mega STEM Lab Kit', price:2999, origPrice:4499, discount:'33% OFF', age:'Class 10–College', category:'arduino', tag:'School Pack', borderColor:'#a855f7', gradient:'linear-gradient(170deg,rgba(168,85,247,0.10) 0%,rgba(6,9,25,0.95) 100%)', spotlight:'rgba(168,85,247,0.22)', image:'assets/images/prod_arduino_uno.png', desc:'Arduino Mega 2560, 60+ components, motor driver, Bluetooth module & full school curriculum guide.', highlights:['Arduino Mega 2560 Board','Bluetooth HC-05 Module','L298N Motor Driver','School Curriculum PDF'] },
  { id:4, name:'Smart RoboCar Kit — 4WD', price:1599, origPrice:2499, discount:'36% OFF', age:'Class 6–10', category:'robo-car', tag:'Bestseller', borderColor:'#10b981', gradient:'linear-gradient(160deg,rgba(16,185,129,0.10) 0%,rgba(6,9,25,0.95) 100%)', spotlight:'rgba(16,185,129,0.22)', image:'assets/images/prod_robocar_4wd.png', desc:'4WD robot car with obstacle avoidance & Bluetooth remote. No soldering needed. Plug & play assembly.', highlights:['4WD Acrylic Chassis + Motors','Ultrasonic Obstacle Avoidance','Bluetooth App Control','No Soldering Required'] },
  { id:5, name:'Line Follower Robot Kit', price:1299, origPrice:1999, discount:'35% OFF', age:'Class 7–11', category:'robo-car', tag:'Competition', borderColor:'#f43f5e', gradient:'linear-gradient(195deg,rgba(244,63,94,0.10) 0%,rgba(6,9,25,0.95) 100%)', spotlight:'rgba(244,63,94,0.22)', image:'assets/images/prod_line_follower.png', desc:'Competition-ready line follower with 5-channel IR sensor array & PID algorithm. Ideal for school robotics events.', highlights:['5-Channel IR Sensor Array','PID Algorithm Pre-coded','High-Speed BO Motors','Competition Ready'] },
  { id:6, name:'Robo Car Pro — Autonomous Kit', price:2799, origPrice:4199, discount:'33% OFF', age:'Class 9–College', category:'robo-car', tag:'Advanced', borderColor:'#3b82f6', gradient:'linear-gradient(180deg,rgba(59,130,246,0.10) 0%,rgba(6,9,25,0.95) 100%)', spotlight:'rgba(59,130,246,0.22)', image:'assets/images/prod_robocar_4wd.png', desc:'Advanced autonomous car: ultrasonic, IR sensors, speed encoder, Bluetooth & WiFi. 30+ project modes.', highlights:['Arduino + Ultrasonic + IR','Speed Encoder Sensors','WiFi Control via Browser','30+ Project Modes'] },
  { id:7, name:'RC Car DIY Kit — 2WD', price:799, origPrice:1199, discount:'33% OFF', age:'Class 5–9', category:'rc-car', tag:'Beginner', borderColor:'#f59e0b', gradient:'linear-gradient(165deg,rgba(245,158,11,0.10) 0%,rgba(6,9,25,0.95) 100%)', spotlight:'rgba(245,158,11,0.22)', image:'assets/images/prod_rc_car.png', desc:'Simple 2WD RC car with 27MHz RF remote. Easy 30-min assembly. Great for beginners.', highlights:['2WD Chassis + RF Remote','27MHz Wireless Control','30-Min Easy Assembly','Fun Hobby Starter Kit'] },
  { id:8, name:'RC Off-Road Buggy Kit — 4WD', price:1899, origPrice:2999, discount:'36% OFF', age:'Class 7–12', category:'rc-car', tag:'Popular', borderColor:'#ec4899', gradient:'linear-gradient(205deg,rgba(236,72,153,0.10) 0%,rgba(6,9,25,0.95) 100%)', spotlight:'rgba(236,72,153,0.22)', image:'assets/images/prod_rc_car.png', desc:'4WD off-road buggy with all-terrain suspension, 2.4GHz remote & gear box assembly kit.', highlights:['4WD All-Terrain Suspension','2.4GHz Radio Remote','Gear Box Assembly Kit','Impact-Resistant Body'] },
  { id:9, name:'Programmable Smart RC Car', price:2499, origPrice:3799, discount:'34% OFF', age:'Class 9–College', category:'rc-car', tag:'Smart', borderColor:'#8b5cf6', gradient:'linear-gradient(215deg,rgba(139,92,246,0.10) 0%,rgba(6,9,25,0.95) 100%)', spotlight:'rgba(139,92,246,0.22)', image:'assets/images/prod_rc_car.png', desc:'RC car with Arduino brain — manual remote OR program autonomous mode. Code via Arduino IDE.', highlights:['Manual + Autonomous Modes','Arduino Programmable','2.4GHz + Bluetooth Control','Code via Arduino IDE'] },
  { id:10, name:'Mini Quadcopter Drone Kit', price:1999, origPrice:3199, discount:'37% OFF', age:'Class 8–12', category:'drone', tag:'Beginner', borderColor:'#00f0ff', gradient:'linear-gradient(160deg,rgba(0,240,255,0.10) 0%,rgba(6,9,25,0.95) 100%)', spotlight:'rgba(0,240,255,0.22)', image:'assets/images/prod_mini_drone.png', desc:'Build your own mini quadcopter. F3 flight controller, 4 brushed motors, 2.4GHz transmitter & LiPo battery.', highlights:['F3 Flight Controller','4x Brushed Motors','2.4GHz 6-Ch Transmitter','600mAh LiPo Battery'] },
  { id:11, name:'FPV Drone Kit — Race Edition', price:5999, origPrice:8999, discount:'33% OFF', age:'Class 10–College', category:'drone', tag:'Advanced', borderColor:'#10b981', gradient:'linear-gradient(180deg,rgba(16,185,129,0.10) 0%,rgba(6,9,25,0.95) 100%)', spotlight:'rgba(16,185,129,0.22)', image:'assets/images/prod_fpv_drone.png', desc:'FPV racing quadcopter: carbon fiber frame, brushless motors, 30A ESCs, FPV camera & flight simulator link.', highlights:['Carbon Fiber 250mm Frame','Brushless + 30A ESCs','FPV 700TVL Camera','Flight Simulator Link'] },
  { id:12, name:'Autonomous GPS Drone Kit', price:9999, origPrice:14999, discount:'33% OFF', age:'College / B.Tech', category:'drone', tag:'College', borderColor:'#a855f7', gradient:'linear-gradient(170deg,rgba(168,85,247,0.10) 0%,rgba(6,9,25,0.95) 100%)', spotlight:'rgba(168,85,247,0.22)', image:'assets/images/prod_gps_drone.png', desc:'Pixhawk flight controller, GPS, barometer, waypoint navigation & Mission Planner. College project ready.', highlights:['Pixhawk Flight Controller','GPS + Barometer Module','Waypoint Navigation','Mission Planner Software'] },
  { id:13, name:'4-DOF Robot Arm Kit', price:1999, origPrice:3199, discount:'37% OFF', age:'Class 8–12', category:'robo-kit', tag:'Popular', borderColor:'#f43f5e', gradient:'linear-gradient(195deg,rgba(244,63,94,0.10) 0%,rgba(6,9,25,0.95) 100%)', spotlight:'rgba(244,63,94,0.22)', image:'assets/images/prod_arm_4dof.png', desc:'4-axis robotic arm with 4 SG90 servos, joystick or Arduino code control & laser-cut acrylic frame.', highlights:['4x SG90 Servo Motors','Joystick + Code Control','Laser-Cut Acrylic Frame','Teach & Repeat Mode'] },
  { id:14, name:'6-DOF Industrial Robot Arm', price:4999, origPrice:7499, discount:'33% OFF', age:'Class 10–College', category:'robo-kit', tag:'Advanced', borderColor:'#3b82f6', gradient:'linear-gradient(180deg,rgba(59,130,246,0.10) 0%,rgba(6,9,25,0.95) 100%)', spotlight:'rgba(59,130,246,0.22)', image:'assets/images/prod_arm_6dof.png', desc:'6-DOF arm with metal gear servos, gripper, Python inverse kinematics & PS2 joystick. Final-year project ready.', highlights:['6 Metal Gear Servos','Mechanical Gripper','Python IK Code','PS2 Joystick Controller'] },
  { id:15, name:'Bipedal Humanoid Walking Robot', price:8499, origPrice:12999, discount:'35% OFF', age:'College / B.Tech', category:'robo-kit', tag:'Premium', borderColor:'#ec4899', gradient:'linear-gradient(205deg,rgba(236,72,153,0.10) 0%,rgba(6,9,25,0.95) 100%)', spotlight:'rgba(236,72,153,0.22)', image:'assets/images/prod_humanoid.png', desc:'17-servo bipedal robot with gyro balancing, mobile app dance motions & rechargeable battery.', highlights:['17 Digital Servo Motors','Gyro Auto-Balancing','Mobile App + Dance Modes','Pre-Programmed Motions'] },
  { id:16, name:'Quadruped Spider Robot Kit', price:4499, origPrice:6999, discount:'36% OFF', age:'Class 10–College', category:'robo-kit', tag:'Fun Build', borderColor:'#8b5cf6', gradient:'linear-gradient(215deg,rgba(139,92,246,0.10) 0%,rgba(6,9,25,0.95) 100%)', spotlight:'rgba(139,92,246,0.22)', image:'assets/images/product_spider_rover.jpg', desc:'4-legged spider robot with crawling gait algorithm, ultrasonic scanner & wireless controller. ~3hr assembly.', highlights:['12 SG90 Servo Motors','Crawling Gait Algorithm','Ultrasonic Obstacle Scanner','Wireless PS2 Controller'] },
  { id:17, name:'Sensor Combo Pack — 10-in-1', price:499, origPrice:799, discount:'37% OFF', age:'All Levels', category:'parts', tag:'Value Pack', borderColor:'#f59e0b', gradient:'linear-gradient(165deg,rgba(245,158,11,0.10) 0%,rgba(6,9,25,0.95) 100%)', spotlight:'rgba(245,158,11,0.22)', image:'assets/images/prod_sensor_pack.png', desc:'10 sensors: Ultrasonic HC-SR04, IR, LDR, DHT11, Soil Moisture, Sound, Flame, MQ-2 Gas, PIR & Touch.', highlights:['10 Sensors in One Pack','HC-SR04 Ultrasonic','DHT11 Temp & Humidity','MQ-2 Gas Sensor'] },
  { id:18, name:'Motor & Driver Module Kit', price:349, origPrice:549, discount:'36% OFF', age:'All Levels', category:'parts', tag:'Essential', borderColor:'#10b981', gradient:'linear-gradient(180deg,rgba(16,185,129,0.10) 0%,rgba(6,9,25,0.95) 100%)', spotlight:'rgba(16,185,129,0.22)', image:'assets/images/real_students_building_robocar.jpg', desc:'4 BO motors (150 RPM) + 2 L298N dual motor driver modules with mounting screws.', highlights:['4x BO Motors 150 RPM','2x L298N Motor Driver','Mounting Screws Included','Works with Arduino/ESP32'] },
  { id:19, name:'ESP32 + IoT Components Pack', price:699, origPrice:1099, discount:'36% OFF', age:'Class 9–College', category:'parts', tag:'IoT Starter', borderColor:'#3b82f6', gradient:'linear-gradient(190deg,rgba(59,130,246,0.10) 0%,rgba(6,9,25,0.95) 100%)', spotlight:'rgba(59,130,246,0.22)', image:'assets/images/prod_esp32_iot.png', desc:'ESP32 DevKit, OLED 0.96" display, 4-ch relay, DHT22 & HC-SR04. Build IoT projects instantly.', highlights:['ESP32 WiFi + BT DevKit','0.96" OLED Display','4-Channel 5V Relay Module','DHT22 + HC-SR04 Sensors'] },
  { id:20, name:'Servo & Structural Parts Pack', price:599, origPrice:899, discount:'33% OFF', age:'All Levels', category:'parts', tag:'Build Pack', borderColor:'#a855f7', gradient:'linear-gradient(170deg,rgba(168,85,247,0.10) 0%,rgba(6,9,25,0.95) 100%)', spotlight:'rgba(168,85,247,0.22)', image:'assets/images/prod_servo_pack.png', desc:'5x SG90 servos, aluminium servo brackets, M3 screws & nuts, 3D-print compatible horn set.', highlights:['5x SG90 Servo Motors','Aluminium Servo Brackets','M3 Nuts, Bolts & Spacers','3D-Compatible Horn Set'] }
];

document.addEventListener('DOMContentLoaded', () => {
  const grid = document.getElementById('products-grid');
  const tabs = document.querySelectorAll('.filter-tab');
  if (!grid) return;

  function renderProducts(filter = 'all') {
    const filtered = filter === 'all' ? products : products.filter(p => p.category === filter);
    grid.innerHTML = '';
    filtered.forEach((p, i) => {
      const card = document.createElement('div');
      card.className = 'product-card';
      card.setAttribute('data-reveal', 'fade-up');
      card.setAttribute('data-delay', `${i * 70}`);
      card.style.setProperty('--card-border', p.borderColor);
      card.style.setProperty('--card-gradient', p.gradient);
      card.style.setProperty('--spotlight-color', p.spotlight);
      const hl = p.highlights ? `<ul class="kit-highlights">${p.highlights.map(h=>`<li>${h}</li>`).join('')}</ul>` : '';
      card.innerHTML = `
        <span class="kit-card-badge" style="background:${p.borderColor};${p.borderColor==='#00f0ff'?'color:#000;':''}">${p.tag} • ${p.age}</span>
        <div class="product-image"><img src="${p.image}" alt="${p.name}" loading="lazy"></div>
        <div class="product-info">
          <div>
            <h3>${p.name}</h3>
            <p style="color:var(--text-secondary);font-size:0.87rem;margin-bottom:10px;line-height:1.55;">${p.desc}</p>
            ${hl}
          </div>
          <div>
            <div class="price"><span class="kit-original-price">₹${p.origPrice.toLocaleString()}</span> ₹${p.price.toLocaleString()} <span class="kit-discount-percent">${p.discount}</span></div>
            <button class="btn btn-buy" style="width:100%;justify-content:center;" onclick="openCheckout('${p.name.replace(/'/g,"\\'")}',${p.price},'${p.image}')">🛒 Buy Now — Free Delivery →</button>
          </div>
        </div>`;
      grid.appendChild(card);
    });
    if (typeof initChromaSpotlight === 'function') initChromaSpotlight();
    if (typeof initScrollReveal === 'function') initScrollReveal();
  }

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      renderProducts(tab.dataset.filter);
    });
  });

  renderProducts();
});

# Ilia Kazakov 
## Contact Info: 

**Phone number:** 89379901127  
**Email:** kazak.redalerd@gmail.com  
**Discord:** Nerevin#8529   
**GitHub:** https://github.com/Nerevin  
  
## About me:
  
> My goal is to change my profession, now I work as a design engineer at a large enterprise, but there are few opportunities for self-realization.   
> I believe that work in the IT sector allows you to monitor new technologies and constantly develop. I believe that I have a good self-learning skill,  
> I take responsibility for tasks and always try to get to the bottom of the matter, and I also love computers from an early age.  
  
## Skills:
  * HTML, CSS base
  * Java(beginner)
  * SQL
  * GIT
    
``` Java
import javax.swing.*;
import java.awt.*;
import java.awt.event.*;

public class Grafon {
    static String a;
    JLabel text = new JLabel("Здесь будет умная надпись", SwingConstants.CENTER);
    public void mainFrame(){
        JFrame frame = new JFrame("Мудрости каждый день");
        frame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        JButton tip = new JButton("Получить совет");
        tip.addActionListener(new Tip());
        JButton kama = new JButton("Спросить Каму");
        kama.addActionListener(new Kama());

        frame.getContentPane().add(BorderLayout.SOUTH, tip);
        frame.getContentPane().add(BorderLayout.NORTH, kama);
        frame.getContentPane().add(BorderLayout.CENTER, text);
        frame.setSize(400, 200);
        frame.setVisible(true);
    }
    class Tip implements ActionListener {
        public void actionPerformed(ActionEvent e) {
            FileRead.tipReader();
            text.setText(a);
        }
    }
    class Kama implements ActionListener {
        public void actionPerformed(ActionEvent e) {
            FileRead.kamaReader();
            text.setText(a);
        }
    }
}
```
  
## Experience:  

  * [CodeAcademy profile](https://www.codecademy.com/profiles/Nerevin)  
  * [Small project on java](https://github.com/Nerevin/tipoftheday)
  * Many book HeadFirst for programmer
  
## Education:
  
Graduated from Samara State Aerospace University in 2016 faculty of Electronics and Instrument Engineering.
  
## English:

I began to study English at school and continued at university. Summary it's about 13 year. The test showed my english level is B1 but I have problem with grammar.
I can understand technical literature and talking about everyday topics. In now I use DuoLingo to improve my 
English level.
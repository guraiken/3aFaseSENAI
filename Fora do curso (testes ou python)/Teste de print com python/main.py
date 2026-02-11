import undetected_chromedriver as uc
import time

def rodar_teste():
    print("Iniciando o teste com undetected-chromedriver...")
    driver = uc.Chrome(version_main=144)  # Especifica a versão do Chrome para evitar problemas de compatibilidade

    try: 
        driver.get("https://www.terabyteshop.com.br/promocoes")
        time.sleep(10)

        driver.save_screenshot()
        print("Print salvo! Verifique a pasta do projeto.")
        
    except Exception as e:
        print(f"❌ Erro durante a execução: {e}")
    
    finally:
        print("✅ Processo finalizado.")
        
if __name__ == "__main__":
    rodar_teste()
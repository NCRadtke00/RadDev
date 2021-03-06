import Button from "components/buttons/Button";
import { ClientSafeProvider, signIn } from "next-auth/react";
import { useStore } from "stores/store";
import Image from "next/image";

interface ProviderButtonsProps {
    providers: Record<string, ClientSafeProvider>;
  }
  
  const ProviderButtons: React.FC<ProviderButtonsProps> = ({ providers }) => {
    const { setAppLoading } = useStore().commonStore;
  
    return (
      <>
        {Object.values(providers).map((provider) => {
          if (provider.id === "credentials") {
            return null;
          }
  
          return (
            <div key={provider.name}>
              <Button
                variant="outlined"
                onClick={() => {
                  setAppLoading(true);
                  signIn(provider.id);
                  setAppLoading(false);
                }}
                className="w-full uppercase !transform-none mt-4"
              >
                <Image
                  height={24}
                  width={24}
                  src={`/logos/${provider.name}.svg`}
                  alt={provider.name}
                />
                <span className="ml-2 !text-[rgba(26, 26, 44, 0.5)]">
                  Sign in with {provider.name}
                </span>
              </Button>
            </div>
          );
        })}
      </>
    );
  };
  
  export default ProviderButtons;
  